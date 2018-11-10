import * as React from 'react';

import * as immutable from './immutableHelpers';

const DEFAULT_SIZE = 2;

// Simple implementation just for this demo
const isEqual = (obj1, obj2) => {
  return !Object.keys(obj1).find(key => obj1[key] !== obj2[key]);
}
const get = (obj, paths, defaultValue) => {
  let pathParts = paths.split('.');
  let o = obj;
  while(pathParts.length > 0) {
    o = o[pathParts[0]];
    if (o == null) return defaultValue;
    pathParts = immutable.shift(pathParts)
  }
  return o != null ? o : defaultValue;
}

export default function withPagination(QueryRenderer) {
  return class Container extends React.Component {
    constructor(props) {
      super(props);

      const { paginationConfig = {} } = props;

      this.state = {
        first: paginationConfig.first || DEFAULT_SIZE,
        after: paginationConfig.after || null,
        pageSize: paginationConfig.pageSize || DEFAULT_SIZE,
        offset: paginationConfig.offset || 0,
        pageCursors: [],
      };
    }

    componentWillReceiveProps(newProps) {
      if (
        !isEqual(newProps.variables, this.props.variables) ||
        !isEqual(newProps.paginationConfig, this.props.paginationConfig)
      ) {
        const { paginationConfig = {} } = newProps;
        this.setState({
          first: paginationConfig.first || DEFAULT_SIZE,
          after: paginationConfig.after || null,
          pageSize: paginationConfig.pageSize || DEFAULT_SIZE,
          offset: paginationConfig.offset || 0,
        });
      }
    }

    onNextPage = (rendererProps) => (event) => {
      event.preventDefault();
      const data = get(rendererProps, this.props.pathToConnection);
      this.setState(state => ({
        first: state.pageSize,
        after: data.pageInfo.endCursor,
        offset: state.offset + state.pageSize,
        pageCursors: immutable.push(state.pageCursors, state.after),
      }));
    };

    onPrevPage = (event) => {
      event.preventDefault();

      this.setState(state => ({
        first: state.pageSize,
        after: immutable.peek(state.pageCursors),
        offset: Math.max(0, state.offset - state.pageSize),
        pageCursors: immutable.pop(state.pageCursors),
      }));
    };

    onPerOptionsChange = (pageSize) => {
      this.setState({ first: pageSize, pageSize, after: null, offset: 0, pageCursors: [] });
    };

    resetPagination = (extra) => {
      this.setState(state => ({
        first: state.pageSize,
        after: null,
        offset: 0,
        pageCursors: [],
      }));
    };

    render() {
      const {
        state: { offset, first, after, pageSize },
        props: { render, variables, pathToConnection },
        variableSetters = {},
        onNextPage,
        onPrevPage,
        onPerOptionsChange,
        resetPagination,
      } = this;

      return (
        <QueryRenderer
          environment={this.props.environment}
          query={this.props.query}
          variables={{
            ...variables,
            first,
            after,
          }}
          render={({ props, error, retry }) => {
            if (!props) return render({ props, error, retry });
            return render({
              props: {
                total: get(props, `${pathToConnection}.total`, 0),
                pageSize,
                offset,
                resetPagination,
                onNextPage: onNextPage(props),
                onPrevPage,
                onPerOptionsChange,
                ...props,
              },
              retry,
              error,
            });
          }}
        />
      );
    }
  }
}
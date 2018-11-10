import * as React from 'react';

const connectionToArray = (conn) => {
  if (!conn || !conn.edges) return [];
  return conn.edges.filter(Boolean).map(e => e.node).filter(Boolean);
}

export default function Table(props) {
  const { total, offset, pageSize, onNextPage, onPrevPage } = props;
  const posts = connectionToArray(props.posts);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {posts.map(post => (
          <tr key={post.id}><td>{post.id}</td><td>{post.name}</td></tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={2}>
            {(onPrevPage && offset > 0) && <a onClick={onPrevPage}>Prev</a>}
            {' '}
            {(onNextPage && (offset + posts.length < total)) && <a onClick={onNextPage}>Next</a>}
            {' '}
            {offset + 1}-{offset + posts.length} of {total}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}
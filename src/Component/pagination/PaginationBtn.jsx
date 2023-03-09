import Pagination from 'react-bootstrap/Pagination';

function PaginationBtn() {
  return (
    <Pagination >
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item >{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item active>{6}</Pagination.Item>
      <Pagination.Item>{7}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default PaginationBtn;
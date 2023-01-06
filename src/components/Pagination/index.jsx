import { Container, PaginationAnt } from "./style";

const Pagination = ({ data, onChange }) => {
  return (
    <Container>
      <PaginationAnt
        total={data?.dataLength + 2}
        onChange={onChange}
        current={data?.pageNum}
      />
    </Container>
  );
};

export default Pagination;

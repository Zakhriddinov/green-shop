import { Container, PaginationAnt } from "./style";

const Pagination = ({ data }) => {
  return (
    <Container>
      <PaginationAnt
        total={
          Number(data?.products?.length) * Number(data?.paginationLinksNumber)
        }
      />
    </Container>
  );
};

export default Pagination;

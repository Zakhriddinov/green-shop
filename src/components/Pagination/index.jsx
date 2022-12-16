import { Container, PaginationAnt } from "./style";

const Pagination = () => {
  return (
    <Container>
      <PaginationAnt total={100} defaultPageSize={22}/>
    </Container>
  );
};

export default Pagination;

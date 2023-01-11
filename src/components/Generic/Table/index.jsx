import { Container } from "./style";


const Table = ({ columns, data }) => {
  return (
    <Container
      columns={columns}
      dataSource={data}
      pagination={false}
      scroll={{
        y: 500,
      }}
    />
  );
};

export default Table;

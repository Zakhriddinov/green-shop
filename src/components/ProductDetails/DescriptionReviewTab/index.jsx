import WriteReview from "./WriteReview";
import Description from "./Description";
import { AntTabs, Container } from "./style";

const DescriptionReviewTab = ({ product }) => {
  return (
    <Container>
      <AntTabs
        centered
        defaultActiveKey="1"
        items={[
          {
            label: `Product Description`,
            key: "1",
            children: <Description />,
          },

          {
            label: `Reviews (${product?.reviewsNumber})`,
            key: "2",
            children: <WriteReview product={product} />,
          },
        ]}
      />
    </Container>
  );
};

export default DescriptionReviewTab;

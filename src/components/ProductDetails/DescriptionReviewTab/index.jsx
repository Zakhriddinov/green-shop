import WriteReview from "./WriteReview";
import Description from "./Description";
import { AntTabs, Container } from "./style";

const DescriptionReviewTab = () => {
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
            label: `Reviews (19)`,
            key: "2",
            children: <WriteReview />,
          },
        ]}
      />
    </Container>
  );
};

export default DescriptionReviewTab;

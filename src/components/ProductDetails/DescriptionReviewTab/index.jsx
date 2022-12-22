import WriteReview from "./WriteReview";
import Description from "./Description";
import { AntTabs, Container } from "./style";

const DescriptionReviewTab = ({
  product,
  formik,
  isModalOpen,
  showModal,
  handleOk,
  reviewCreated,
}) => {
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
            children: (
              <WriteReview
                product={product}
                formik={formik}
                isModalOpen={isModalOpen}
                showModal={showModal}
                handleOk={handleOk}
                reviewCreated={reviewCreated}
              />
            ),
          },
        ]}
      />
    </Container>
  );
};

export default DescriptionReviewTab;

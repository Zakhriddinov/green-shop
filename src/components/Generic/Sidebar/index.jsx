import BoldText from "../Typography/BoldText";
import { Container, Link, Wrapper } from "./style";

const Sidebar = ({ title, navbar }) => {
  return (
    <Container>
      <BoldText style={{ marginLeft: "21px" }} type={"size18"}>
        {title}
      </BoldText>
      <Wrapper>
        {navbar.map(({ title, path, hidden, Icon }, index) => {
          return (
            !hidden && (
              <>
                <Link
                  key={index}
                  to={path}
                  className={({ isActive }) => isActive && "active"}
                >
                  <Icon />
                  {title}
                </Link>
              </>
            )
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

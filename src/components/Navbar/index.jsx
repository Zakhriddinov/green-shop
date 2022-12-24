import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Main,
  Section,
  Wrapper,
  Basket,
  Icon,
  Mobile,
  MobileLink,
  Menu,
  Cart,
} from "./style";
import logo from "../../assets/images/logo.png";
import navbar from "../../utils/navbar";
import Footer from "../Footer";
import Search from "../Search";
import { Button } from "../Generic";
import { Dropdown } from "antd";
import { useState } from "react";
import Modal from "../Register";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import BoldText from "../Generic/Typography/BoldText";
import Paragraph from "../Generic/Typography/Paragraph";
import { removeFromCart } from "../../redux/cart/cartSlice";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { orderItems } = useSelector((state) => state.cart);
  const token = localStorage.getItem("access_token");
  const isAdmin = token && jwt_decode(`${token}`).isAdmin;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("access_token");
      navigate(`/home`);
    } else {
      navigate(`${name}`);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item data-name="profile/account-details" onClick={onClickProfile}>
        My Profile
      </Menu.Item>
      <Menu.Item data-name="favorites" onClick={onClickProfile}>
        Favourites
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile}>
        Log out
      </Menu.Item>
    </Menu>
  );
  const admin = (
    <Menu>
      <Menu.Item data-name="profile/account-details" onClick={onClickProfile}>
        Admin Dashboard
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile}>
        Log out
      </Menu.Item>
    </Menu>
  );
  const cart = (
    <Cart>
      {orderItems
        ?.map((value, index) => (
          <Cart.Wrap key={index}>
            <img src={value.images} alt="" />
            <BoldText
              type={"size14"}
              onClick={() => navigate(`products/${value.productId}`)}
              style={{ cursor: "pointer" }}
            >
              {value.title} ({value.quantity})
            </BoldText>
            <Paragraph type={"14px"} style={{ color: "var(--colorGreen)" }}>
              ${value.itemTotal}{" "}
              <Icon.Close onClick={() => dispatch(removeFromCart(value))} />
            </Paragraph>
          </Cart.Wrap>
        ))
        .slice(0, 3)}

      <Button
        type={"success"}
        onClick={() => navigate("/shopping-cart")}
        width={200}
        height={30}
        style={{ borderRadius: "0", margin: "0 auto" }}
      >
        Go to cart
      </Button>
    </Cart>
  );

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <img src={logo} alt="logo" />
          </Section>
          <Section>
            <Search icon={<Icon.Search />} />
            <Dropdown
              overlay={cart}
              placement="topRight"
              arrow={{ pointAtCenter: true }}
              trigger="hover"
            >
              <Basket>
                <Icon.Basket />
                <div className="count">{orderItems.length}</div>
              </Basket>
            </Dropdown>
            <div className="avatar">
              {isAdmin === false ? (
                <Dropdown
                  overlay={menu}
                  placement="topRight"
                  arrow={{ pointAtCenter: true }}
                  trigger="click"
                >
                  <Button type="dark" width="35" height="35">
                    <Icon.User />
                  </Button>
                </Dropdown>
              ) : isAdmin === true ? (
                <Dropdown
                  overlay={admin}
                  placement="topRight"
                  arrow={{ pointAtCenter: true }}
                  trigger="click"
                >
                  <Button type="dark" width="35" height="35">
                    <Icon.User />
                  </Button>
                </Dropdown>
              ) : (
                <Button
                  type="success"
                  width="100"
                  height="35"
                  onClick={showModal}
                >
                  <Icon.Login />
                  Login
                </Button>
              )}
            </div>

            <Modal
              isModalOpen={isModalOpen}
              handleOk={handleOk}
              handleCancel={handleCancel}
              setIsModalOpen={setIsModalOpen}
            />
          </Section>
        </Wrapper>
        <Mobile>
          {navbar.map(({ title, path, hidden, Icon, basket }, index) => {
            return (
              !hidden && (
                <>
                  <MobileLink
                    key={index}
                    to={path}
                    className={({ isActive }) => isActive && "active"}
                  >
                    {basket && (
                      <Basket>
                        <div className="count">{orderItems.length}</div>
                      </Basket>
                    )}
                    <Icon />
                    {title}
                  </MobileLink>
                </>
              )
            );
          })}
        </Mobile>
      </Main>
      <div className="menu_line"></div>
      <Outlet />
      {pathname.substring(0, 8) === "/profile" ? null : <Footer />}
    </Container>
  );
};

export default Navbar;

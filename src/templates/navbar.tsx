import { MenuOutlined } from "@ant-design/icons";
import { Menu, Layout, Drawer, Button } from "antd";
import { useState } from "react";
import "./carousel.css"

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => setVisible(true);
  const onClose = () => setVisible(false);

  return (
    <Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        backgroundColor: "rgba(248,249,250,1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      className="header"
    >
      <div
        style={{
          width: "100%",
          justifyContent: "space-between",
          display: "flex",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div style={{ fontSize: "2.4rem", fontWeight: "bold", color: "#f03e83" }}>
          <img src="/logo.ico" alt="logo" style={{ height: "32px" }} />
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["home"]}
            overflowedIndicator={null}
            style={{
              borderBottom: "none",
              textDecorationColor: "transparent",
              color: "#590140",
              flexWrap: "nowrap",
              overflow: "visible",
              backgroundColor: "transparent",
            }}
          >
            <Menu.Item
              key="home"
              style={{
                color: "#590140",
                fontWeight: "bolder",
                fontSize: "1.5rem",
              }}
            >
              Home
            </Menu.Item>
            <Menu.Item
              key="signup"
              style={{
                color: "#590140",
                fontWeight: "bolder",
                fontSize: "1.5rem",
              }}
            >
              Sign Up
            </Menu.Item>
            <Menu.Item
              key="signin"
              style={{
                color: "#590140",
                fontWeight: "bolder",
                fontSize: "1.5rem",
              }}
            >
              Sign In
            </Menu.Item>
          </Menu>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="mobile-menu">
          <Button
            type="text"
            icon={
              <MenuOutlined style={{ fontSize: "24px", color: "#590140" }} />
            }
            onClick={showDrawer}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "40px", // optional — control height
              width: "40px", // optional — make it a square button
              padding: 0, // remove extra padding
            }}
          />

          <Drawer
            placement="top"
            closable={false}
            onClose={onClose}
            open={visible}
          >
            <Menu
              mode="vertical"
              defaultSelectedKeys={["home"]}
              style={{
                borderBottom: "none",
                backgroundColor: "transparent",
              }}
            >
              <Menu.Item
                key="home"
                onClick={onClose}
                style={{
                  color: "#590140",
                  fontWeight: "bolder",
                  fontSize: "1rem",
                }}
              >
                Home
              </Menu.Item>
              <Menu.Item
                key="signup"
                onClick={onClose}
                style={{
                  color: "#590140",
                  fontWeight: "bolder",
                  fontSize: "1rem",
                }}
              >
                Sign Up
              </Menu.Item>
              <Menu.Item
                key="signin"
                onClick={onClose}
                style={{
                  color: "#590140",
                  fontWeight: "bolder",
                  fontSize: "1rem",
                }}
              >
                Sign In
              </Menu.Item>
            </Menu>
          </Drawer>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;

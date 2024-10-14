import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Outlet, useNavigate } from "react-router-dom";
import Todo from "./Todo";
import Page from "./3Page";
import { Content } from "antd/es/layout/layout";

function Home() {
  const navigate = useNavigate();
  const SiderItems: any = [
    {
      key: "todo",
      label: "todo",

      element: <Todo />,
    },
    {
      key: "page",
      label: "page",

      element: <Page />,
    },
  ];
  return (
    <div>
      <Layout>
        <Sider style={{ height: "98vh", borderRadius: "10px" }} width={"25%"}>
          <Menu
            theme="dark"
            items={SiderItems}
            onClick={(e) => {
              navigate(e.key);
            }}
          ></Menu>
        </Sider>
        <Layout>
          <Content style={{ padding: "30px" }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Home;

import { Navbar, Link, Text, Dropdown, User } from "@nextui-org/react";
import { Layout } from "./Layout.jsx";

import avatar from './img1.jpeg'

export default function Barra() {

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <Text b color="inherit" hideIn="xs">
            Portfolio
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="/tecnologies">Tecnologies</Navbar.Link>
          <Navbar.Link isActive href="/">About me</Navbar.Link>
          <Navbar.Link href="/contact">Contact</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <User
                  bordered
                  as="button"
                  color="secondary"
                  size="md"
                  src={avatar}
                  name="Adriana Gomez"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  If you want to see
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  my resume, please contact me
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider color="error">
                adriana.d@hotmail.com
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>





        <Navbar.Collapse disableAnimation>
          <Navbar.CollapseItem key="About me" activeColor="warning">
            <Link color="primary" css={{ minWidth: "100%", }} href="/" >
              About me
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="Tecnologies" activeColor="warning">
            <Link color="primary" css={{ minWidth: "100%", }} href="/tecnologies" >
            Tecnologies
            </Link>
          </Navbar.CollapseItem>
          <Navbar.CollapseItem key="Contact" activeColor="warning">
            <Link color="primary" css={{ minWidth: "100%", }} href="/contact" >
            Contact
            </Link>
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}

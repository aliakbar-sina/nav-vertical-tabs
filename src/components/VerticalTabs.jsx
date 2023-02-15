import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import StickyHeadTable from "../components/StickyHeadTable";
import SearchBox from "../components/SearchBox";

function LeftTabsExample() {
  return (
    <div className="border border-primary p-3">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={2}>
            <Nav
              variant="pills"
              className="flex-column text-center text-md-start"
            >
              <Nav.Item>
                <Nav.Link eventKey="first">Page 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Page 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Page 3</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Page 4</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Page 5</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <SearchBox />
                <StickyHeadTable />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <StickyHeadTable />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <StickyHeadTable />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <StickyHeadTable />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <StickyHeadTable />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default LeftTabsExample;

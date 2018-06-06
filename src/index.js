//import styles
import "grommet/scss/vanilla/index";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "grommet/components/App";
import Actions from "grommet/components/icons/base/Actions";
import Anchor from "grommet/components/Anchor";
import Box from "grommet/components/Box";
import Columns from "grommet/components/Columns";
import Header from "grommet/components/Header";
import Heading from "grommet/components/Heading";
import Hero from "grommet/components/Hero";
import Image from "grommet/components/Image";
import Footer from "grommet/components/Footer";
import Menu from "grommet/components/Menu";
import Meter from "grommet/components/Meter";
import Paragraph from "grommet/components/Paragraph";
import Title from "grommet/components/Title";
import Value from "grommet/components/Value";

class Main extends Component {
  render() {
    return (
      <App centered={false}>
        <Header fixed={false} float={false} size="medium" splash={false} pad={{ horizontal: "medium", vertical: "medium" }}>
          <Title>Grommet Custom</Title>
          <Box flex={true} justify="end" direction="row" responsive={false}>
            <Menu icon={<Actions />} dropAlign={{ right: "right" }}>
              <Anchor href="#" className="active">
                First
              </Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          </Box>
        </Header>
        <Hero
          background={
            <Image
              src="img/hero-1.jpg"
              fit="cover"
              full={true}
              align={{ top: true }}
            />
          }
          backgroundColorIndex="dark"
        >
          <Box direction="row" justify="center" align="center">
            <Box basis="1/2" align="end" pad="medium" />
            <Box basis="1/2" align="start" pad="medium">
              <Heading margin="none">HPE</Heading>
            </Box>
          </Box>
        </Hero>
        <Columns pad={{ horizontal: "medium", vertical: "medium" }}>
          <Box align="center" pad="medium" margin="small" colorIndex="light-2">
            Box 1
          </Box>
        </Columns>
        <Footer justify="between" size="medium" pad={{ horizontal: "medium", vertical: "medium" }}>
          <Title>
            <s />
            HPE
          </Title>
          <Box direction="row" align="center" pad={{ between: "medium" }}>
            <Paragraph margin="none">© 2016 Grommet Labs</Paragraph>
            <Menu direction="row" size="small" dropAlign={{ right: "right" }}>
              <Anchor href="#">Support</Anchor>
              <Anchor href="#">Contact</Anchor>
              <Anchor href="#">About</Anchor>
            </Menu>
          </Box>
        </Footer>
      </App>
    );
  }
}

let element = document.getElementById("content");
ReactDOM.render(React.createElement(Main), element);

document.body.classList.remove("loading");
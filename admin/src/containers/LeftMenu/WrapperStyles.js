/**
 *
 * Wrapper Styles
 *
 */

import styled from "styled-components";
import PropTypes from "prop-types";
import { sizes } from "strapi-helper-plugin";

const Wrapper = styled.div`
  position: fixed;
  float: left;
  top: 0;
  left: ${({ isOpen, theme }) =>
    isOpen ? "0" : `-${theme.main.sizes.leftMenu.width}`};
  transition: left 300ms;

  @media (min-width: ${sizes.desktop}) {
    left: 0;

    // Fixed others z-index
    z-index: 1000;
  }

  // Top-Navbar z-index id 1040;
  z-index: 10000;

  height: 100vh;
  width: ${(props) => props.theme.main.sizes.leftMenu.width};
  background: ${(props) => props.theme.main.colors.strapi["blue-darker"]};

  /* scrollbar overrides */
  * {
    ::-webkit-scrollbar {
      width: 7px;
    }

    ::-webkit-scrollbar-track,
    ::-webkit-scrollbar-track:hover {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${(props) =>
        props.theme.main.colors.leftMenu["title-color"]};
    }

    ::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) =>
        props.theme.main.colors.leftMenu["link-color"]};
    }

    /* firefox */
    scrollbar-color: ${(props) =>
        props.theme.main.colors.leftMenu["title-color"]}
      transparent;
  }
`;

Wrapper.defaultProps = {
  isOpen: false,
  theme: {
    main: {
      colors: {
        strapi: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  isOpen: PropTypes.bool,
  theme: PropTypes.object,
};

export default Wrapper;

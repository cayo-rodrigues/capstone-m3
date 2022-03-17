import styled from "styled-components";

export const Container = styled.div`
  .bm-logo {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
  }

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 50px;
    height: 42px;
    left: 20px;
    top: 30px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: var(--color-bg);
    border-radius: 4px;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: var(--color-secondary);
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: var(--color-bg);
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: var(--color-aux);
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: var(--white);
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  .bm-item + .bm-item {
    margin-top: 10px;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  @media screen and (min-width: 925px) {
    display: none;
  }
`;

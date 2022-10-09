/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import logo from "../../assets/logo.svg";
import { actions } from "./slice";
import { selectCounter, selectHello } from "./slice/selector";
import { Wrapper, Logo, Header, Link } from "./style";
import ProminentAppBar from "../../Component/NavBar";
const Home = () => {
  const dispatch = useDispatch();

  const counter = useSelector(selectCounter);
  const hello = useSelector(selectHello);

  useEffect(() => {
    setInterval(
      () => dispatch(actions.changeCounter(performance.now().toFixed(0))),
      100
    );
  }, []);

  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="logo" />
        <div>
          <div code>{hello}</div>
        </div>
        <div>
          <div code>{counter}</div>
        </div>
      </Header>
    </Wrapper>
  );
};

export default Home;

import React, { Component } from "react";
import PropTypes from "prop-types";
import { FilterComponent, NameofFilter } from "../style";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <FilterComponent
        style={{
          //   background: isOpen && " rgba(85, 171, 171, 0.5)",
          transition: "all 0.2s",
        }}
        onClick={onClick}
      >
        <div style={{ cursor: "pointer" }}>
          <NameofFilter>{label} </NameofFilter>
          <div style={{ float: "right", transition: "all 0.2s" }}>
            {isOpen ? (
              <KeyboardArrowRightIcon
                sx={{ transition: "all 0.2s", transform: "rotate(90deg)" }}
              />
            ) : (
              <KeyboardArrowRightIcon sx={{ transition: "all 0.2s" }} />
            )}
          </div>
        </div>
        {isOpen && (
          <div
            style={{
              borderTop: "2px solid #008f68",
              marginTop: 10,
              padding: "10px 20px",
              transition: "all 0.2s",
            }}
          >
            {this.props.children}
          </div>
        )}
      </FilterComponent>
    );
  }
}

export default AccordionSection;

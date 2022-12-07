import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  FilterComponent,
  NameofFilter,
  CollapsedAccordion,
  WrapperFlex,
} from "../style";
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
      <>
        <FilterComponent
          style={{
            //   background: isOpen && " rgba(85, 171, 171, 0.5)",
            transition: "all 0.2s",
          }}
          onClick={onClick}
        >
          <WrapperFlex>
            <NameofFilter>{label} </NameofFilter>
            {isOpen ? (
              <KeyboardArrowRightIcon
                sx={{ transition: "all 0.2s", transform: "rotate(90deg)" }}
              />
            ) : (
              <KeyboardArrowRightIcon sx={{ transition: "all 0.2s" }} />
            )}
          </WrapperFlex>
        </FilterComponent>

        <CollapsedAccordion isOpen={isOpen}>
          {this.props.children}
        </CollapsedAccordion>
      </>
    );
  }
}

export default AccordionSection;

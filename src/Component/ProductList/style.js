import styled from "styled-components";
import { up, down, between } from "styled-breakpoints";

export const Wrapper = styled.section`
  padding: 2rem 0;
  transition: all 0.2s;
  .grid-three-column {
    grid-template-columns: repeat(6, 1fr);
  }

  .container {
    display: grid;
    max-width: 120rem;
  }

  .grid {
    gap: 1rem;
  }

  ${between("xl", "xxl")} {
    .grid-three-column {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  ${between("lg", "xl")} {
    .grid-three-column {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  ${between("md", "lg")} {
    .grid-three-column {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  ${between("sm", "md")} {
    .grid-three-column {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  ${down("sm")} {
    .grid-three-column {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

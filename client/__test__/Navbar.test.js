import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "../src/components/common/Navbar";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => ({
    navigate: jest.fn()
  })
}));

describe("<Navbar />", () => {
  //   it("calls onNavChange when a button is clicked", () => {
  //     const mockOnNavChange = jest.fn();
  //     const component = render(
  //       <>
  //         <Router>
  //           <Navbar onNavChange={mockOnNavChange} />
  //         </Router>
  //       </>
  //     );

  //     const logoutButton = component.getByTestId("logout");
  //     fireEvent.click(logoutButton);

  //     expect(mockOnNavChange).toHaveBeenCalledTimes(1);
  //     expect(mockOnNavChange).toHaveBeenCalledWith("Logout");
  //   });

  //   it("has 6 items", () => {
  //     const { getByText } = render(
  //       <Router>
  //         <Navbar onNavChange={() => {}} />
  //       </Router>
  //     );
  //     expect(getByText("Home")).toBeInTheDocument();
  //     expect(getByText("Profiles")).toBeInTheDocument();
  //     expect(getByText("My Profile")).toBeInTheDocument();
  //     expect(getByText("Logout")).toBeInTheDocument();
  //     expect(getByText("Register")).toBeInTheDocument();
  //     expect(getByText("Login")).toBeInTheDocument();
  //   });

  it("matches the snapshot", () => {
    const mockOnNavChange = jest.fn();
    const { baseElement } = render(
      <Router>
        <Navbar onNavChange={mockOnNavChange} />
      </Router>
    );
    expect(baseElement).toMatchSnapshot();
  });

  //   it("matches snapshot on initial render", () => {
  //     const component = render(
  //       <Router>
  //         <Navbar />
  //       </Router>
  //     );
  //     expect(component.baseElement).toMatchSnapshot();
  //   });
});

import React from "react";
import { shallow } from "enzyme";
import { TeamLandingPage } from "../TeamLandingPage";
import { getTeams } from "../../actions/Teams";

var teams = [];
const wrapper = shallow(<TeamLandingPage getTeams={getTeams} teams={teams} />);

describe("Test TeamLandingPage Component", () => {
  it("render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should have links for Test,ODI,T20 and IPL", () => {
    expect(
      wrapper
        .find("p")
        .at(0)
        .text()
    ).toBe("Test");

    expect(
      wrapper
        .find("p")
        .at(1)
        .text()
    ).toBe("ODI");

    expect(
      wrapper
        .find("p")
        .at(2)
        .text()
    ).toBe("IT20");

    expect(
      wrapper
        .find("p")
        .at(3)
        .text()
    ).toBe("IPL");
  });
  it("should change the state of testClicked to true when test tab is clicked", () => {
    const test = wrapper.find("div").at(4);
    test.simulate("click");
    expect(wrapper.state().testClick).toBe(true);
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(false);
    expect(wrapper.state().iplClick).toBe(false);
  });

  it("should change the state of odiclicked to true when odi tab is clicked", () => {
    const odi = wrapper.find("div").at(5);
    odi.simulate("click");
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().odiClick).toBe(true);
    expect(wrapper.state().t20Click).toBe(false);
    expect(wrapper.state().iplClick).toBe(false);
  });

  it("should change the state of t20Click to true when IT20 tab is clicked", () => {
    const t20 = wrapper.find("div").at(6);
    t20.simulate("click");
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(true);
    expect(wrapper.state().iplClick).toBe(false);
  });
  it("should change the state of iplClick to true when IPL tab is clicked", () => {
    const ipl = wrapper.find("div").at(7);
    ipl.simulate("click");
    expect(wrapper.state().odiClick).toBe(false);
    expect(wrapper.state().testClick).toBe(false);
    expect(wrapper.state().t20Click).toBe(false);
    expect(wrapper.state().iplClick).toBe(true);
  });
  it("should check if the tabs are getting clicked ", () => {
    wrapper
      .find("div")
      .at(0)
      .simulate("click");
  });
  // it("history.push", () => {
  //   const spy = jest.spyOn(Component.prototype, "getTeams");
  //   const wrapper = mount(<Component {...props} />);
  //   wrapper.instance().getTeams();
  //   expect(spy).toHaveBeenCalled();
  // });
  // expect(spy).toHaveBeenCalled();
  // it("history.push", () => {
  //   const historyMock = { push: jest.fn() };
  //   expect(historyMock.push.mock.calls[0]).toEqual();
  // });
  // it("should have exactly 14 div tags", () => {
  //   expect(wrapper.find("div").length).toBe(14);
  // });
  // it("renders child correctly", () => {
  //   expect(
  //     wrapper
  //       .find(".country-team")
  //       .children()
  //       .find("p")
  //   ).to.have.length(teams.length);
  // });
  // test("click", () => {
  //   wrapper
  //     .find("div.grid-class-team")
  //     .first()
  //     .simulate("click");
  // });
  it("should have no br tags", () => {
    expect(wrapper.find("br").length).toBe(0);
  });
  it("should have className = 'container-team' exacty 1", () => {
    expect(wrapper.find(".container-team").length).toBe(1);
  });
  it("should have className = 'h1-team' exacty 1", () => {
    expect(wrapper.find(".h1-team").length).toBe(1);
    expect(wrapper.find(".h1-team").text()).toBe("Teams");
  });
  it("should have className = 'grid-container-team' exacty 1", () => {
    expect(wrapper.find(".grid-container-team").length).toBe(1);
  });
  it("should have className = 'country-team' exacty 1", () => {
    expect(wrapper.find(".country-team").length).toBe(1);
  });
  // it("should have className = 'grid-class-team' exacty 1", () => {
  //   expect(wrapper.find(".grid-class-team").length).toBe(1);
  // });
  // it("should have className = 'info-team' exacty 1", () => {
  //   expect(wrapper.find(".info-team").length).toBe(4);
  // });
  it("should have className = 'top-team' exacty 1", () => {
    expect(wrapper.find(".top-team").length).toBe(1);
  });
  it("should have className = 'top-team' exacty 1", () => {
    expect(wrapper.find(".top-team").length).toBe(1);
  });
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });
  // -------------------------
  // it("should have className = 'grid-class-topteam' exacty 1", () => {
  //   expect(wrapper.find(".grid-class-topteam").length).toBe(1);
  // });
  // it("should have className = 'cards' exacty 1", () => {
  //   expect(wrapper.find(".cards").length).toBe(1);
  // });
  // it("should have className = 'cardtest' exacty 1", () => {
  //   expect(wrapper.find(".cardtest").length).toBe(1);
  // });
  // it("should have className = 'cardodi' exacty 1", () => {
  //   expect(wrapper.find(".cardodi").length).toBe(1);
  // });
  // it("should have className = 'cardt20' exacty 1", () => {
  //   expect(wrapper.find(".cardt20").length).toBe(1);
  // });
  // it("should have className = 'p-card' exacty 3", () => {
  //   expect(wrapper.find(".p-card").length).toBe(3);
  // });
  // ---------------------------
  // it("should have className = 'list' exacty 4", () => {
  //   expect(wrapper.find(".list").length).toBe(4);
  // });
  // it("should have className = 'img-card' exacty 4", () => {
  //   expect(wrapper.find(".img-card").length).toBe(4);
  // });
  // it("should have className = 'p-team-name' exacty 4", () => {
  //   expect(wrapper.find(".p-team-name").length).toBe(4);
  // });
  // it("should have className = 'h2-team-position' exacty 4", () => {
  //   expect(wrapper.find(".h2-team-position").length).toBe(4);
  // });
  // it("should have className = 'hr-team-card' exacty 4", () => {
  //   expect(wrapper.find(".hr-team-card").length).toBe(4);
  // });
});

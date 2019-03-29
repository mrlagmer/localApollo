import React from "react";
import { Mutation } from "react-apollo";
import { updatePageNameMutation } from "../graphql";

import "./styles/Sidebar.scss";

class Sidebar extends React.Component {
  render() {
    return (
      <Mutation mutation={updatePageNameMutation}>
        {updatePageName => (
          <div className="sidebar">
            <ul style={{ padding: 0 }}>
              <li
                className="sidebar-item"
                onClick={() => updatePageName({ variables: { name: "React" } })}
              >
                React
              </li>
              <li
                className="sidebar-item"
                onClick={() =>
                  updatePageName({ variables: { name: "Apollo Client" } })
                }
              >
                Apollo Client
              </li>
              <li
                className="sidebar-item"
                onClick={() =>
                  updatePageName({ variables: { name: "Next Js" } })
                }
              >
                Next.js
              </li>
            </ul>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Sidebar;

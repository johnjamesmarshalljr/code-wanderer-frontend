import React from "react";
import Resource from "../components/Resource";

class ResourcesContainer extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.filterResourcesFromInput();
  };

  filterResourcesFromInput = () => {
    return this.props.category.resources.filter((resource) =>
      resource.name.toUpperCase().includes(this.state.name.toUpperCase())
    );
  };

  render() {
    return (
      <div>
        <input
          class="newnewnew"
          placeholder="SEARCH"
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}
        />

        <ul>
          {this.filterResourcesFromInput().map((resource) => (
            <Resource resource={resource} key={resource.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ResourcesContainer;

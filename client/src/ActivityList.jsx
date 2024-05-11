import React from "react";
import activities from "./activities";

// Activity component to display individual activity
const ActivityCard = ({ name, description, url, registration, date }) => {
  let details = url !== "" ? <a href={url}>More details</a> : null;
  return (
    <div className="activity-card">
      <div className="activity-details">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Date: {date}</p>
        <p>Sign-up: {registration}</p>
        {details}
      </div>
    </div>
  );
};

// Main component to display all activities
class ActivityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: activities,
      filterType: "All", // Default filter type
    };
  }

  handleFilterChange = (event) => {
    const filterType = event.target.value;
    this.setState({ filterType });
  };

  render() {
    const filteredActivities =
      this.state.filterType === "All"
        ? this.state.activities
        : this.state.activities.filter(
            (activity) => activity.type === this.state.filterType
          );

    return (
      <main>
        <div className="filter">
          <select id="filter" onChange={this.handleFilterChange}>
            <option value="All">All</option>
            <option value="Competition">Competition</option>
            <option value="Service Learning">Service Learning</option>
            <option value="SOT">SOT</option>
          </select>
        </div>
        <div className="activity-list">
          {filteredActivities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </main>
    );
  }
}

export default ActivityList;

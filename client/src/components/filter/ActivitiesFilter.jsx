import { useDispatch } from "react-redux";
import { resetCountries, filterCountriesByActivity } from "../../redux/actions";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Filter&Sort.module.css";
const ActivitiesFilter = () => {
  const dispatch = useDispatch();
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const response = await axios.get("http://localhost:3001/activity");
      const activityNames = response.data.map((activity) => activity.Nombre);
      setActivities(activityNames);
    };

    fetchActivities();
  }, []);

 

  const handleActivityChange = (event) => {
    const activity = event.target.value;
    if (activity === "all") {
      dispatch(resetCountries());
    } else {
      dispatch(filterCountriesByActivity(activity));
    }
  };
  return (
    <div>
    <select className={style.filter} onChange={handleActivityChange}>
        <option value="all">Todas las actividades</option>
        {activities.map(activity => (
          <option key={activity} value={activity}>{activity}</option>
        ))}
      </select>
    </div>
   

    
  );
};

export default ActivitiesFilter;

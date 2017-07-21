import { projectsData } from '../data/projects';

export default function layout(state = projectsData, action) {
  switch (action.type) {
    default:
      return state;
  }
}

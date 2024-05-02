import {Task} from '../model/interfaces';

const Tasks: Task[] = [
  {
    task: 'Complete project report ',
    time: new Date('2024-04-21T08:00:00'),
    location: 'Home',
    image: 'project_report_image.jpg',
    category: 'Work',
    done: true,
  },
  {
    task: 'Go for a run',
    time: new Date('2024-04-21T10:00:00'),
    location: 'Park',
    image: 'running_image.jpg',
    category: 'Health',
    done: true,
  },
  {
    task: 'Buy groceries',
    time: new Date('2024-04-21T12:00:00'),
    location: 'Supermarket',
    image: 'groceries_image.jpg',
    category: 'Shopping',
    done: false,
  },
  {
    task: 'Call mom',
    time: new Date('2024-04-21T14:00:00'),
    location: 'Home',
    image: 'phone_call_image.jpg',
    category: 'Personal',
    done: false,
  },
  {
    task: 'Call mom',
    time: new Date('2024-04-21T14:00:00'),
    location: 'Home',
    image: 'phone_call_image.jpg',
    category: 'Personal',
    done: false,
  },
];

export default Tasks;

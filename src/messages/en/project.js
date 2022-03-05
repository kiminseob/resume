export default [
  {
    id: 0,
    title: 'Career: SuperFrame Admin UI Development',
    image: 'superframe.png',
    gif: 'superframe.png',
    subtitle:
      'This is the management page of the WAS integrated management solution SuperFrame product.',
    feature: [
      'UI development for each cloud and legacy environment',
      'Cluster, Server, ReplicaSet configuration page development',
      'Implement each detailed setting inquiry, creation, removal, and editing API call logic',
      'Global state management using MobX',
      'Development of more than 30 pages including jeus monitoring information inquiry and command call function',
    ],
    stack: 'ES5+, React, Material-UI, MobX',
  },
  {
    id: 1,
    title: 'Practice: Todo List1',
    image: 'todolist.png',
    gif: 'todolist.gif',
    subtitle:
      'This is a simple to-do list website developed after learning react and mobx for the first time. It has the ability to add, remove, and filter to-do lists. Save the data of the todo list created by utilizing localStorage.',
    feature: [
      'Adding todo Items to the todo list by typing them with the keyboard.',
      'Change to complete state by clicking the checkbox of todo list (add completed class to li tag, added checked attribute to input tag).',
      'Delete the element using the x button in the todo list.',
      'Change to input mode when double-clicking todo list (add editing class to li tag) However, if you press esc key while editing is not completed, it returns to view mode without modification.',
      'Show the number of items counted in todo list at the bottom of the list Check the status value of the todo list and show only the items in the status when you click the to-do or completed job',
      'Storing data in localStorage to reflect the TodoItem&apos;s CRUD. Therefore, you should be able to check the saved data even after refreshing.',
    ],
    stack: 'React, MobX, SCSS, Material-UI',
    demo: 'https://kiminseob.github.io/react-todo-list-step1',
    github: 'https://github.com/kiminseob/react-todo-list-step1',
  },
];

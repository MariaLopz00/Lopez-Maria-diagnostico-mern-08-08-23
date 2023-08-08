import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function TaskList({ tasks, onToggleCompletion, onDeleteTask }) {
  return (
    <Row xs={1} md={3} className="g-4" style={{marginTop: 5}}>
      {tasks.map((task) => (
         <Col key={task._id}>
        <Card className='tarjeta' >
          <Card.Header>Tarea 😄📑: {task.titulo}</Card.Header>
          <Card.Body>
            <Card.Text>
              <h5>
                <input
                  type="checkbox"
                  style={{marginRight: 5}}
                  checked={task.completed}
                  onChange={() => onToggleCompletion(task._id, !task.completed)}
                />
                <span className={task.completed ? 'completed' : ''}>
                  {task.descripcion}
                </span>
              </h5>
              <Button variant="outline-danger" onClick={() => onDeleteTask(task._id)} >Eliminar</Button>
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TaskList;

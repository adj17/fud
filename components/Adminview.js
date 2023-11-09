import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState,useEffect,useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button,Form,Modal } from 'react-bootstrap';
import axios from 'axios';
function View()  {
  const [fuds,setFuds] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFudId, setEditFudId] = useState('');
  const [editedFudData, setEditedFudData] = useState({ Fooditems: '', rate: '' });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/fud');
        setFuds(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/fuddata/${id}`);
      setFuds((prevFuds) => prevFuds.filter((fud) => fuds._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleShowEditModal = useCallback((id) => {
    setEditFudId(id);
    setShowEditModal(true);
    const fudToEdit = fuds.find((fud) => fud._id === id);
    setEditFudId({ ...fudToEdit });
  }, [fuds]);

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleEditFud= async () => {
    try {
      await axios.put(`/fuddata/${editFudId}`, editedFudData);
      const updatedFuds = fuds.map((fud) =>
        fud._id === editFudId ? { ...fud, ...editedFudData } : fud
      );
      setFuds(updatedFuds);
      handleCloseEditModal();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <><div>
          <h2>Fud Details</h2>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>No</th>
                      <th>Fooditems name</th>
                      <th>Role</th>
                     
                      <th>Action</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {fuds.map((fud, index) => (
                      <tr key={fud._id}>
                          <td>{index + 1}</td>
                          <td>{fud.Fooditems}</td>
                          <td>{fud.rate}</td>
                        
                          <td>
                              <Button variant="info" onClick={() => handleShowEditModal(fud._id)}>
                                  Edit
                              </Button>
                          </td>
                          <td>
                              <Button variant="danger" onClick={() => handleDelete(fud._id)}>
                                  Delete
                              </Button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </Table>

          {showEditModal && (
              <Modal show={showEditModal} onHide={handleCloseEditModal}>
                  <Modal.Header closeButton>
                      <Modal.Title>Edit Job</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form>
                          <Form.Group controlId="editCompanyName">
                              <Form.Label>Fooditem Name</Form.Label>
                              <Form.Control
    type="text"
    value={editedFudData.Fooditems}
    onChange={(e) => setEditedFudData({ ...editedFudData, Fooditems: e.target.value })}
/>
                          </Form.Group>
                          <Form.Group controlId="editRole">
                              <Form.Label>Rate</Form.Label>
                              <Form.Control
                                  type="text"
                                  value={editedFudData.rate}
                                  onChange={(e) => setEditedFudData({ ...editedFudData, rate: e.target.value })} />
                          </Form.Group>
                          
                      </Form>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button variant="danger" onClick={handleCloseEditModal}>
                          Close
                      </Button>
                      <Button variant="danger" onClick={handleEditFud}>
                          Save Changes
                      </Button>
                  </Modal.Footer>
              </Modal>
             
          )}
      </div><div className="text-center mt-3">
              <Link to="/admin">
                  <Button className="bot1" variant="danger">
                      Admin Dashboard
                  </Button>
              </Link>
          </div></>
  
  );
}
export default View;

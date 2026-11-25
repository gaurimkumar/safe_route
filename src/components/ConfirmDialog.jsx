
import { Modal, Button } from 'flowbite-react'

function ConfirmDialog() {
  return (
    <Modal show={true} size="md">
      <Modal.Header>Delete Report</Modal.Header>

      <Modal.Body>
        <p className="text-gray-600">
          Are you sure you want to delete this hazard report?
          This action cannot be undone.
        </p>
      </Modal.Body>

      <Modal.Footer>
        <Button color="failure">Yes, Delete</Button>
        <Button color="light">Cancel</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmDialog

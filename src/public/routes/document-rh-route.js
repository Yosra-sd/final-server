var express = require('express');
var router = express.Router();

const document_rh_controller = require('../controllers/document-rh-controller')
const requireLogin = require('../middleware/requireLogin');

/** ask for a human resource document */
router.post('/api/ask-for-document', requireLogin, document_rh_controller.ask_document)

/** get my asked documents */
router.get('/api/get-my-documents', requireLogin, document_rh_controller.get_my_documents)

/** Responsable: generate the asked document */
router.put('/api/generate-document/:id', document_rh_controller.generate_document)

/** Responsable: Get employee demands  */
router.get('/api/get-all-demands', document_rh_controller.get_all_demands)

module.exports = router
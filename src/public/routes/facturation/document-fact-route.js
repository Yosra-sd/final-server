var express = require('express');
var router = express.Router();

const documentFactController = require('../../controllers/facturation/document-fact-controller');
const requireLogin = require('../../middleware/requireLogin');

/** get all fact documents */
router.get('/api/list-fact-documents', requireLogin, documentFactController.get_fact_documents)

/** creation d'une facture ou d'un devis */
router.post('/api/create-fact-document', requireLogin, documentFactController.generate_document_fact)

/** suppression du document */
router.delete('/api/delete-fact-document/:id', requireLogin, documentFactController.delete_fact_document)

/** modification du document */
router.put('/api/update-fact-document/:id', requireLogin, documentFactController.update_fact_document)

/** selected client */
router.put('/api/get-selected-client', requireLogin, documentFactController.get_selected_client)

module.exports = router
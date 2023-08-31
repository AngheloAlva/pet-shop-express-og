import { Router } from 'express'
import { getCategories, createCategory, updateCategory, deleteCategory, getCategory } from '../controllers/category.controller.js'

const router = Router()

router.post('/', createCategory)

router.get('/', getCategories)

router.get('/:id', getCategory)

router.put('/:id', updateCategory)

router.delete('/:id', deleteCategory)

export default router

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { addNews } from '@/services/news.client';

export default function AddNewsPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [preview, setPreview] = useState(null)
    const [errors, setErrors] = useState({})

    const handleImageChange = e => {
        const file = e.target.files[0]

        if (!file) return

        if (!file.type.startsWith('image/')) {
        setErrors(prev => ({ ...prev, image: 'Only image files are allowed' }))
        e.target.value = ''
        setPreview(null)
        return
        }

        setErrors(prev => ({ ...prev, image: null }))
        setPreview(URL.createObjectURL(file))
    }

    // this fun is for to create form validation
    const validateForm = form => {
        const newErrors = {}

        const title = form.title.value.trim()
        const date = form.date.value
        const content = form.content.value.trim()
        const image = form.image.files[0]

        if (!title) newErrors.title = 'Title is required'

        if (!date) newErrors.date = 'Date is required'

        if (!image) {
        newErrors.image = 'Image is required'
        } else if (!image.type.startsWith('image/')) {
        newErrors.image = 'Only image files are allowed'
        }

        if (!content) {
        newErrors.content = 'Content is required'
        } else {
        const wordCount = content.split(/\s+/).filter(Boolean).length
        if (wordCount > 699) {
            newErrors.content = 'Content must be less than 699 words'
        }
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    // this fun is for to handle add news form data 
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target

        if (!validateForm(form)) return

        setLoading(true)

        const formData = new FormData()
        formData.append('title', form.title.value)
        formData.append('date', form.date.value)
        formData.append('content', form.content.value)
        formData.append('image', form.image.files[0])

        try {
            const {status, message, details} = await addNews(formData);
            console.log('response', status,message,details)
            if(status == true){
                toast.success(message || 'News added successfully')

                form.reset()
                setPreview(null)
                setErrors({})

                setTimeout(() => {
                    router.push('/news')
                }, 400)
            }else{
                toast.error(message || 'Failed to add news')
            }
            
        } catch (err) {
            toast.error('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className="add-news-container">
      <h2>Add News</h2>

      <form onSubmit={handleSubmit} className="add-news-form">
        <div className="form-group">
          <label>Title *</label>
          <input name="title" placeholder="News title" />
          {errors.title && <p className="error">{errors.title}</p>}
        </div>

        <div className="form-group">
          <label>Date *</label>
          <input type="date" name="date" />
          {errors.date && <p className="error">{errors.date}</p>}
        </div>

        <div className="form-group">
          <label>Image *</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
          {errors.image && <p className="error">{errors.image}</p>}

          {preview && <img src={preview} alt="Preview" className="image-preview" />}
        </div>

        <div className="form-group">
          <label>Content *</label>
          <textarea
            name="content"
            placeholder="Write news content..."
            rows={6}
          />
          {errors.content && <p className="error">{errors.content}</p>}
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Publish News'}
        </button>
      </form>
    </div>
  )
}

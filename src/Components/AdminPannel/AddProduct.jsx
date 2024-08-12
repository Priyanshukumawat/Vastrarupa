import React from 'react';
import InputField from '../Common/InputField';
import Button from '../Common/Button';
import { toast } from 'react-hot-toast';

function AddProductForm({ onClose }) {
    // Define state variables for form fields
    const [formData, setFormData] = React.useState({
        productName: '',
        category: '',
        collection: '',
        color: '',
        description: '',
        originalPrice: '',
        discountedPrice: '',
        stock: '',
        material: '',
        internalMaterial: '',
        limitOfManufacturing: '',
        sleevesType: '',
        careInstruction: '',
        images: [],
        video: null
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission goes here
        toast.success("Product add sucessfully")
        console.log(formData);
        // Call onClose to close the form
        onClose();
    };

    // Handle image upload
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setFormData({ ...formData, images: files });
    };

    // Handle video upload
    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, video: file });
    };

    // Array of input fields
    const inputFields = [
        { label: 'Product Name', name: 'productName', type: 'text' },
        { label: 'Category', name: 'category', type: 'text' },
        { label: 'Collection', name: 'collection', type: 'text' },
        { label: 'Color', name: 'color', type: 'text' },
        { label: 'Description', name: 'description', type: 'text' },
        { label: 'Original Price', name: 'originalPrice', type: 'text' },
        { label: 'Discounted Price', name: 'discountedPrice', type: 'text' },
        { label: 'Stock', name: 'stock', type: 'text' },
        { label: 'Material', name: 'material', type: 'text' },
        { label: 'Internal Material', name: 'internalMaterial', type: 'text' },
        { label: 'Limit of Manufacturing', name: 'limitOfManufacturing', type: 'text' },
        { label: 'Sleeves Type', name: 'sleevesType', type: 'text' },
        { label: 'Care Instruction', name: 'careInstruction', type: 'text' }
    ];

    return (
        <div className="bg-white p-8 rounded-md">
            <h2 className="text-xl font-bold mb-4 text-[#85586F]">Add New Product</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
                {inputFields.map((field, index) => (
                    <InputField
                        key={index}
                        label={field.label}
                        type={field.type}
                        value={formData[field.name]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className={field.className || 'col-span-2'}
                    />
                ))}
                {/* Image upload */}
                <div className="flex flex-col col-span-1">
                    <label htmlFor="images" className="mb-1 text-[#85586F]">Images</label>
                    <input
                        type="file"
                        id="images"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="border px-4 py-2 rounded text-[#643843] focus:outline-none bg-[#F0F0F0] focus:border-[#AC7D88]"
                    />
                    {/* Image preview */}
                    <div className="flex mt-2">
                        {formData.images.map((image, index) => (
                            <img
                                key={index}
                                src={URL.createObjectURL(image)}
                                alt={`Image ${index + 1}`}
                                className="max-h-32 mr-2"
                            />
                        ))}
                    </div>
                </div>
                {/* Video upload */}
                <div className="flex flex-col col-span-1">
                    <label htmlFor="video" className="mb-1 text-[#85586F]">Video</label>
                    <input
                        type="file"
                        id="video"
                        name="video"
                        accept="video/*"
                        onChange={handleVideoUpload}
                        className="border px-4 py-2 rounded text-[#643843] focus:outline-none bg-[#F0F0F0] focus:border-[#AC7D88]"
                    />
                </div>
                <div className="col-span-4 flex justify-start">
                    <Button type="submit" className="mr-2">Save</Button>
                    <Button onClick={onClose}>Close</Button>
                </div>
            </form>
        </div >
    );
}

export default AddProductForm;

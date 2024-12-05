import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div className="bg-gray-900 font-sans text-gray-100">
    <table className="w-full max-w-2xl mx-auto">
      <tr>
        <td className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg">
          <table className="w-full">
            <tr>
              <td>
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">New Message Received</h1>
                <p className="text-gray-400 mb-8">A new contact has reached out through your portfolio.</p>
                
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-md mb-8 border border-gray-700">
                  <h2 className="text-xl font-semibold text-blue-400 mb-4">Contact Information</h2>
                  <p className="text-gray-300 mb-2">
                    <span className="inline-block w-16 text-gray-500">Name:</span> 
                    <span className="font-medium">{name}</span>
                  </p>
                  <p className="text-gray-300">
                    <span className="inline-block w-16 text-gray-500">Email:</span> 
                    <span className="font-medium">{email}</span>
                  </p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-50 p-6 rounded-md mb-8 border border-gray-700">
                  <h2 className="text-xl font-semibold text-blue-400 mb-4">Message Content</h2>
                  <p className="text-gray-300 whitespace-pre-wrap">{message}</p>
                </div>
                
                <div className="text-center">
                  <a href={`mailto:${email}`} className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1">
                    Reply to {name}
                  </a>
                </div>
                
                <p className="text-sm text-gray-500 mt-8 text-center">
                  This email was sent from your portfolio website's contact form.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
);


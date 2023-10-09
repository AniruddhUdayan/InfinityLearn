import axios from 'axios';
import * as AWS from 'aws-sdk';
import {getSqsValue} from "./firebaseService"
const apiInstance = axios.create({
    baseURL: process.env.uamAPI,
    headers: {
        'X-Tenant': 'infinitylearn',
    },
});

export async function getGrades() {
    try {
        const response = await apiInstance.get('api/grades');

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch data from the API');
        }
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
}

export async function getExams() {
    try {
        const response = await apiInstance.get('api/exams');

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch data from the API');
        }
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
}
export async function verifyPhone(request) {
    try {
        const response = await apiInstance.post('api/users/verifyPhone', request);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch data from the API');
        }
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
}

export async function sendOtp(request) {
    try {
        const response = await apiInstance.post('api/authentication/generateOTP', request);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch data from the API');
        }
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
}

export async function validateOTP(request) {
    try {
        const response = await apiInstance.post('api/authentication/validateOTP', request);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch data from the API');
        }
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
}

export async function sendSQSMsg(payload) {
    getSqsValue().then((firebaseConfig) => {
        console.log(firebaseConfig,'firebaseConfig')
        AWS.config.update({
            accessKeyId: firebaseConfig?.access_key,
            secretAccessKey: firebaseConfig?.secret_key,
            region: 'ap-south-1', // Replace with your desired region      
        })
        const sqs = new AWS.SQS();
        const params = {
            MessageBody: JSON.stringify(payload), // The message content
            // MessageGroupId: '1',
            // MessageDeduplicationId: '1',
            QueueUrl: firebaseConfig?.testing_queue_url // Replace with your SQS queue URL
        };

        sqs.sendMessage(params, (err, data) => {
            if (err) {
                console.log('Error', err);
            } else {
                console.log('Message sent successfully', data.MessageId);
            }
        });

    }, (error) => {
        console.log(error)
    })
}
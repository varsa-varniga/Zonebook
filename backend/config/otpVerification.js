const redis = require('redis');
const twilio = require('twilio');
require('dotenv').config();

// Redis setup
const redisClient = redis.createClient(); // defaults to localhost:6379
redisClient.connect().catch(console.error);

// Twilio setup
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const twilioClient = twilio(accountSid, authToken);

const otpVerification = {
    sendOTP : async (phoneNumber) => {
        const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
        const ttl = 300; // 5 minutes in seconds
      
        try {
          // Store OTP in Redis with TTL
          await redisClient.setEx(phoneNumber, ttl, otp.toString());
          console.log(`OTP stored in Redis for ${phoneNumber}: ${otp}`);
      
          // Send OTP via Twilio
          const message = await twilioClient.messages.create({
            body: `Your OTP is: ${otp}`,
            from: '+15005550006',
            to: phoneNumber
          });
      
          console.log('OTP sent via SMS:', message.sid);
        } catch (error) {
          console.error('Error sending OTP or storing in Redis:', error);
        }
      },
      verifyOTP : async (phoneNumber, inputOtp) => {
        const storedOtp = await redisClient.get(phoneNumber);
        if (storedOtp === inputOtp) {
          console.log('OTP verified successfully');
          await redisClient.del(phoneNumber); // Remove after successful verification
        } else {
          console.log('Invalid or expired OTP');
        }
      }

}

module.exports = {otpVerification};
  
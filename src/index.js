import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 4050;

// Use cookie-parser to parse cookies
app.use(cookieParser());

// Your route where you want to access the ULID
app.get('/', (req, res) => {
    // Automatically obtain the URL from the request
    const currentUrl = `http://${req.get('host')}:${PORT}`;  // Get the host from the request
    console.log(`Request made to: ${currentUrl}`);

    // Retrieve the ULID from the cookie
    const userULID = req.cookies.userULID;

    if (userULID) {
        res.send(`User ULID is: ${userULID}`);
    } else {
        res.send('No ULID found.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

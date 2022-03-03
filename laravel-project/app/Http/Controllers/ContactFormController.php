<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use App\Models\Contact;

class ContactFormController extends Controller
{
    // Store Contact Form data
    public function ContactForm(Request $request) {

        // Form validation
            $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required'
            ]);
            if ($validator->fails()) { 
        return response()->json(['error'=>$validator->errors()], 401);            
    }
        //  Store data in database
        Contact::create($request->all());
        return response()->json(['success' => 'The email has been sent.']);
    }
}

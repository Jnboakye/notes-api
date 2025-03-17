import express from 'express'
import { Note } from '../models/note_model.js';

/*
export const getNotes = async (req, res) => {
    const allNotes = await Note.find({})
    res.status(200).json({ "notes": allNotes });
}
*/

export const postNotes = async (req, res) => {


    const note = new Note(req.body)
    const newNote = await note.save()



    res.status(200).json({ "notes": newNote });
}

export const getNotes = async (req, res) => {
    const note = await Note.findById(req.param.Id);

    res.status(200).json({ "notes": newNote });
}

/*
export const countNotes = (req, res) => {
    req.send('All notes count!');
}

export const updateNotes = (req, res) => {
    req.send(`Notes with id ${req.params.id} updated!`);
}

export const deleteNotes = (req, res) => {
    req.send(`Notes with id ${req.params.id} deleted!`);
}
*/
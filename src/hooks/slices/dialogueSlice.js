import React from 'react'

const createDialogueSlice = (set, get) => ({

    dialogue: null,
    dialogueIndex: 0,
    dialogueSpeaker: null,
    dialoguePersistent: false,

startDialogue: (scene) =>
        set(() => ({
            dialogue: scene.lines,
            dialogueIndex: 0,
            dialogueSpeaker: scene.speaker || null,
            dialoguePersistent: scene.persistent || false,
        })),

    nextDialogueLine: () =>
        set((state) => {
            if (!state.dialogue || state.dialogueIndex >= state.dialogue.length - 1) {
                return {
                    dialogue: null,
                    dialogueIndex: 0,
                    dialoguePersistent: false,
                };
            }

            return { dialogueIndex: state.dialogueIndex + 1 };
        }),
})

export default createDialogueSlice
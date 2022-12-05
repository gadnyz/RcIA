const vscode = require('vscode');
const superagent = require("superagent");

/**
 * @param {vscode.ExtensionContext} context
 */

function activate(context) {
	//Recuperation du context de l'editeur
	const editor = vscode.window.activeTextEditor;

	if (!editor) {
		return
	}

	async function findSnippets(requete) {
        //validation for no text being selected
        if (requete.length == 0){
            console.log("Commencez par selectioner un texte avant de lancer la reherche")
            vscode.window.showWarningMessage("Commencez par selectioner un code avant de lancer la reherche")
        }
        // const forumURL = "https://www.codegrepper.com/api/search.php?q=" + data + "&search_options=search_titles";
        const forumURL = "http://127.0.0.1:5000//api/v1/fragments/?recherche="+requete;
        
        // callbacks

        superagent
            .get(forumURL)
            .end((error, response) => {
                let data = JSON.parse(response.text);
                console.log(data)
                if (data["language"].length == 0) {
                    vscode.window.showWarningMessage("Le serveur n'a rien retourné !!")
                }
                editor.edit(editBuilder => {
                    // const n_data =new Map(Object.entries(JSON.parse(data)))
					vscode.window.showInformationMessage(data)
                    // editBuilder.replace(selections, String(n_data));
                });
            })
    }

	let disposable = vscode.commands.registerCommand('client-rcia.helloWorld', async function () {
		const document = editor.document;
		const selection = editor.selection;

		const code_selectionne = document.getText(selection);
		await findSnippets(code_selectionne);
		vscode.window.showInformationMessage("Recherche fragment ... "+code_selectionne);
		console.log(code_selectionne)
	});

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}

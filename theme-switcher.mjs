import fs from 'fs';
import path from 'path';

const componentsDir = path.join(process.cwd(), 'src/app/components');

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Colors
    content = content.replace(/text-gray-900/g, 'text-white');
    content = content.replace(/text-gray-600/g, 'text-gray-400');
    content = content.replace(/text-gray-800/g, 'text-gray-200');

    // Backgrounds
    content = content.replace(/bg-white/g, 'bg-gray-950');
    content = content.replace(/bg-pink-50\b/g, 'bg-gray-900');
    content = content.replace(/bg-pink-100\b/g, 'bg-black');
    content = content.replace(/bg-pink-200/g, 'bg-purple-900/50');
    content = content.replace(/bg-pink-300/g, 'bg-purple-800');
    content = content.replace(/bg-pink-400/g, 'bg-purple-600');
    content = content.replace(/bg-pink-500/g, 'bg-purple-600');
    content = content.replace(/bg-pink-600/g, 'bg-purple-700');

    // Hover Backgrounds
    content = content.replace(/hover:bg-pink-50/g, 'hover:bg-white/5');
    content = content.replace(/hover:bg-pink-100/g, 'hover:bg-white/10');

    // Gradients
    content = content.replace(/from-white/g, 'from-gray-950');
    content = content.replace(/via-white/g, 'via-gray-950');
    content = content.replace(/to-white/g, 'to-gray-950');

    content = content.replace(/from-pink-50\b/g, 'from-gray-900');
    content = content.replace(/via-pink-50\b/g, 'via-gray-900');
    content = content.replace(/to-pink-50\b/g, 'to-gray-900');

    content = content.replace(/from-pink-100/g, 'from-black');
    content = content.replace(/via-pink-100/g, 'via-black');
    content = content.replace(/to-pink-100/g, 'to-black');

    content = content.replace(/from-pink-300/g, 'from-purple-600');
    content = content.replace(/to-pink-400/g, 'to-purple-900');
    content = content.replace(/from-pink-400/g, 'from-purple-700');
    content = content.replace(/from-pink-500/g, 'from-purple-600');
    content = content.replace(/via-pink-400/g, 'via-purple-500');
    content = content.replace(/to-pink-600/g, 'to-purple-800');

    // Borders
    content = content.replace(/border-pink-200/g, 'border-white/10');
    content = content.replace(/border-pink-300/g, 'border-purple-500/50');

    // Text
    content = content.replace(/text-pink-500/g, 'text-purple-400');
    content = content.replace(/text-pink-600/g, 'text-purple-300');
    content = content.replace(/text-pink-400/g, 'text-purple-500');

    // Shadows
    content = content.replace(/shadow-pink-500/g, 'shadow-purple-500');
    content = content.replace(/rgba\(236,72,153/g, 'rgba(168,85,247'); // rgb for pink-500 -> purple-500

    // FallingPetals specific: petals are white/purple now instead of default 🌸 (we can't easily string replace the emoji, but let's change 🌸 to ✨)
    content = content.replace(/🌸/g, '✨');

    fs.writeFileSync(filePath, content, 'utf-8');
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceInFile(fullPath);
        }
    }
}

walkDir(componentsDir);
// Also apply to App.tsx
replaceInFile(path.join(process.cwd(), 'src/app/App.tsx'));
// Also apply to index.css if necessary (though mostly utilities are used)
console.log('Theme replacement complete!');

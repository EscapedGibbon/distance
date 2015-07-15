"use strict";

exports.euclidean = require('ml-euclidean-distance');
exports.squaredEuclidean = require('ml-euclidean-distance').squared;
exports.manhattan = require('./distances/manhattan');
exports.minkowski = require('./distances/minkowski');
exports.chebyshev = require('./distances/chebyshev');
exports.sorensen = require('./distances/sorensen');
exports.gower = require('./distances/gower');
exports.soergel = require('./distances/soergel');
exports.kulczynski = require('./distances/kulczynski');
exports.canberra = require('./distances/canberra');
exports.lorentzian = require('./distances/lorentzian');
exports.intersection = require('./distances/intersection');
exports.waveHedges = require('./distances/waveHedges');
exports.czekanowski = require('./distances/czekanowski');
exports.motyka = require('./distances/motyka');
exports.ruzicka = require('./distances/ruzicka');
exports.tanimoto = require('./distances/tanimoto');
exports.innerProduct = require('./distances/innerProduct');
exports.harmonicMean = require('./distances/harmonicMean');
exports.cosine = require('./distances/cosine');
exports.kumarHassebrook = require('./distances/kumarHassebrook');
exports.jaccard = require('./distances/jaccard');
exports.dice = require('./distances/dice');
exports.fidelity = require('./distances/fidelity');
exports.bhattacharyya = require('./distances/bhattacharyya');
exports.hellinger = require('./distances/hellinger');
exports.matusita = require('./distances/matusita');
exports.squaredChord = require('./distances/squaredChord');
exports.pearson = require('./distances/pearson');
exports.neyman = require('./distances/neyman');
exports.squared = require('./distances/squared');
exports.probabilisticSymmetric = require('./distances/probabilisticSymmetric');
exports.divergence = require('./distances/divergence');
exports.clark = require('./distances/clark');
exports.kullbackLeibler = require('./distances/kullbackLeibler');
exports.jeffreys = require('./distances/jeffreys');
exports.kdivergence = require('./distances/kdivergence');
exports.topsoe = require('./distances/topsoe');
exports.jensenDifference = require('./distances/jensenDifference');
exports.taneja = require('./distances/taneja');
exports.kumarJohnson = require('./distances/kumarJohnson');
exports.avg = require('./distances/avg');
exports.tree = require('ml-tree-similarity');
exports.additiveSymmetric = require('./distances/additiveSymmetric');
exports.jensenShannon = require('./distances/jensenShannon');
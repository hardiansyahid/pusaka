(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"scripts":{"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"shareSocial":TDV.Tour.Script.shareSocial,"getOverlays":TDV.Tour.Script.getOverlays,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"cloneBindings":TDV.Tour.Script.cloneBindings,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizFinish":TDV.Tour.Script.quizFinish,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"createTween":TDV.Tour.Script.createTween,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"unregisterKey":TDV.Tour.Script.unregisterKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"isPanorama":TDV.Tour.Script.isPanorama,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupImage":TDV.Tour.Script.showPopupImage,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"init":TDV.Tour.Script.init,"getMediaByName":TDV.Tour.Script.getMediaByName,"mixObject":TDV.Tour.Script.mixObject,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"showWindow":TDV.Tour.Script.showWindow,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"historyGoForward":TDV.Tour.Script.historyGoForward,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"clone":TDV.Tour.Script.clone,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"translate":TDV.Tour.Script.translate,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeJS":TDV.Tour.Script.executeJS,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"existsKey":TDV.Tour.Script.existsKey,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumePlayers":TDV.Tour.Script.resumePlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"startMeasurement":TDV.Tour.Script.startMeasurement,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setValue":TDV.Tour.Script.setValue,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"initAnalytics":TDV.Tour.Script.initAnalytics,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"openLink":TDV.Tour.Script.openLink,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"quizStart":TDV.Tour.Script.quizStart,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getPixels":TDV.Tour.Script.getPixels,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMapLocation":TDV.Tour.Script.setMapLocation,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"registerKey":TDV.Tour.Script.registerKey,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags},"start":"this.init()","class":"Player","data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"rate":1,"pitch":1},"name":"Player4626","history":{}},"scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","hash": "1849519c734c6efd90e5249a3aab2c1e82ddeafdafb503031ac20526be05e45f", "definitions": [{"id":"panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7_camera","initialSequence":"this.sequence_C3D443E5_CE89_55AF_41DB_84CACF200743","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D_camera","initialSequence":"this.sequence_C3D423E5_CE89_55AF_41D9_62248C6675D7","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7","label":trans('panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7.label'),"hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":1024,"colCount":12,"url":"media/panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"url":"media/panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7_t.jpg"}],"class":"Panorama","data":{"label":"front"},"hfov":360,"overlays":["this.overlay_DE77C889_CE99_5267_41DF_55E7A16F3749"],"thumbnailUrl":"media/panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7_t.jpg","hfovMin":"150%","vfov":180,"adjacentPanoramas":[{"backwardYaw":177.21,"yaw":-173.77,"distance":2.62,"panorama":"this.panorama_C3D4917B_CE89_529B_41C2_6D74885EE932","class":"AdjacentPanorama","data":{"overlayID":"overlay_DE77C889_CE99_5267_41DF_55E7A16F3749"},"select":"this.overlay_DE77C889_CE99_5267_41DF_55E7A16F3749.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D","label":trans('panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D.label'),"hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":1024,"colCount":12,"url":"media/panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"url":"media/panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D_t.jpg"}],"class":"Panorama","data":{"label":"3"},"hfov":360,"overlays":["this.overlay_DF6A0367_CE99_D6AB_41DF_B73AF7A6C72D"],"thumbnailUrl":"media/panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D_t.jpg","hfovMin":"150%","vfov":180,"adjacentPanoramas":[{"backwardYaw":80.7,"yaw":-178.71,"distance":3.1,"panorama":"this.panorama_C3D4917B_CE89_529B_41C2_6D74885EE932","class":"AdjacentPanorama","data":{"overlayID":"overlay_DF6A0367_CE99_D6AB_41DF_B73AF7A6C72D"},"select":"this.overlay_DF6A0367_CE99_D6AB_41DF_B73AF7A6C72D.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_C3D4917B_CE89_529B_41C2_6D74885EE932_camera","initialSequence":"this.sequence_C3D463E6_CE89_55AD_41E1_C27DD7EFA170","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747","label":trans('panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747.label'),"hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":1024,"colCount":12,"url":"media/panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"url":"media/panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747_t.jpg"}],"class":"Panorama","data":{"label":"2"},"hfov":360,"overlays":["this.overlay_DE026A19_CE99_3667_41CF_DBC38531C299"],"thumbnailUrl":"media/panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747_t.jpg","hfovMin":"150%","vfov":180,"adjacentPanoramas":[{"backwardYaw":-1.59,"yaw":-173.63,"distance":2.77,"panorama":"this.panorama_C3D4917B_CE89_529B_41C2_6D74885EE932","class":"AdjacentPanorama","data":{"overlayID":"overlay_DE026A19_CE99_3667_41CF_DBC38531C299"},"select":"this.overlay_DE026A19_CE99_3667_41CF_DBC38531C299.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"MainViewerPanoramaPlayer","aaEnabled":true,"touchControlMode":"drag_rotation","mode":"quality","class":"PanoramaPlayer","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate"},{"id":"panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747_camera","initialSequence":"this.sequence_C3D413E5_CE89_55AF_41E6_9E96DE3FEC3E","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_C3D4917B_CE89_529B_41C2_6D74885EE932_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_C3D4917B_CE89_529B_41C2_6D74885EE932","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"}]},{"id":"panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346","label":trans('panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346.label'),"hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":1024,"colCount":12,"url":"media/panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"url":"media/panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346_t.jpg"}],"class":"Panorama","data":{"label":"1"},"hfov":360,"overlays":["this.overlay_DFC52CCF_CE97_33FC_41DD_B8B61AD9CA2A"],"thumbnailUrl":"media/panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346_t.jpg","hfovMin":"150%","vfov":180,"adjacentPanoramas":[{"backwardYaw":-80.84,"yaw":179.7,"distance":2.32,"panorama":"this.panorama_C3D4917B_CE89_529B_41C2_6D74885EE932","class":"AdjacentPanorama","data":{"overlayID":"overlay_DFC52CCF_CE97_33FC_41DD_B8B61AD9CA2A"},"select":"this.overlay_DFC52CCF_CE97_33FC_41DD_B8B61AD9CA2A.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"MainViewer","class":"ViewerArea","toolTipFontSize":"1.11vmin","data":{"name":"Main Viewer"},"playbackBarBackgroundColorDirection":"vertical","toolTipBorderColor":"#767676","toolTipPaddingRight":6,"subtitlesTop":0,"subtitlesBottom":50,"progressBackgroundColorRatios":[0],"playbackBarProgressBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"playbackBarBackgroundOpacity":1,"progressRight":"33%","playbackBarHeadBorderSize":0,"vrPointerSelectionColor":"#FF6600","subtitlesTextShadowColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"surfaceReticleColor":"#FFFFFF","progressOpacity":0.7,"playbackBarProgressBorderSize":0,"minHeight":50,"subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","playbackBarLeft":0,"playbackBarHeadShadow":true,"progressBarBackgroundColor":["#3399FF"],"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBorderColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"playbackBarBorderSize":0,"vrPointerSelectionTime":2000,"progressBottom":10,"minWidth":100,"toolTipPaddingLeft":6,"playbackBarHeadHeight":15,"progressBackgroundColor":["#000000"],"toolTipShadowColor":"#333138","progressHeight":2,"playbackBarBorderColor":"#FFFFFF","progressBorderColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipTextShadowColor":"#000000","subtitlesFontFamily":"Arial","width":"100%","playbackBarHeadShadowBlurRadius":3,"progressBarBorderRadius":2,"subtitlesTextShadowHorizontalLength":1,"playbackBarBottom":5,"progressBarBorderSize":0,"progressBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","height":"100%","playbackBarBorderRadius":0,"progressBorderRadius":2,"playbackBarProgressBorderColor":"#000000","subtitlesGap":0,"playbackBarHeadShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressLeft":"33%","toolTipFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontColor":"#606060","subtitlesBackgroundColor":"#000000","firstTransitionDuration":0,"vrPointerColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"playbackBarRight":0,"subtitlesFontColor":"#FFFFFF","propagateClick":false,"playbackBarHeight":10,"playbackBarHeadBorderRadius":0,"toolTipPaddingTop":4,"toolTipBackgroundColor":"#F6F6F6"},{"id":"panorama_C3D4917B_CE89_529B_41C2_6D74885EE932","label":trans('panorama_C3D4917B_CE89_529B_41C2_6D74885EE932.label'),"hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"tags":"ondemand","height":1024,"colCount":12,"url":"media/panorama_C3D4917B_CE89_529B_41C2_6D74885EE932_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":2,"width":6144},{"tags":["ondemand","preload"],"height":512,"colCount":6,"url":"media/panorama_C3D4917B_CE89_529B_41C2_6D74885EE932_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","rowCount":1,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C3D4917B_CE89_529B_41C2_6D74885EE932_t.jpg"}],"class":"Panorama","data":{"label":"mid"},"hfov":360,"overlays":["this.overlay_C1DAFEF3_CE8B_4FAB_41DD_7449DEBE92BA","this.overlay_DE125DEE_CE8B_CDBD_41C2_B7BDCBD3EAC4","this.overlay_DEC05ABA_CE8B_77A4_41C2_8F3558407480","this.overlay_DEB3A86E_CE8B_32BD_41C9_DAB77F71CE0C"],"thumbnailUrl":"media/panorama_C3D4917B_CE89_529B_41C2_6D74885EE932_t.jpg","hfovMin":"150%","vfov":180,"adjacentPanoramas":[{"backwardYaw":-173.63,"yaw":-1.59,"distance":6.99,"panorama":"this.panorama_C3D3FA5C_CE89_369D_41D8_001C8C3AE747","class":"AdjacentPanorama","data":{"overlayID":"overlay_C1DAFEF3_CE8B_4FAB_41DD_7449DEBE92BA"},"select":"this.overlay_C1DAFEF3_CE8B_4FAB_41DD_7449DEBE92BA.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":-178.71,"yaw":80.7,"distance":6.83,"panorama":"this.panorama_C3D52CCB_CE89_33FB_41E0_17F3B435C35D","class":"AdjacentPanorama","data":{"overlayID":"overlay_DEB3A86E_CE8B_32BD_41C9_DAB77F71CE0C"},"select":"this.overlay_DEB3A86E_CE8B_32BD_41C9_DAB77F71CE0C.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":-173.77,"yaw":177.21,"distance":5.36,"panorama":"this.panorama_C3D5CF1C_CE89_4E9D_41AD_0323B07B89A7","class":"AdjacentPanorama","data":{"overlayID":"overlay_DEC05ABA_CE8B_77A4_41C2_8F3558407480"},"select":"this.overlay_DEC05ABA_CE8B_77A4_41C2_8F3558407480.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":179.7,"yaw":-80.84,"distance":6.48,"panorama":"this.panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346","class":"AdjacentPanorama","data":{"overlayID":"overlay_DE125DEE_CE8B_CDBD_41C2_B7BDCBD3EAC4"},"select":"this.overlay_DE125DEE_CE8B_CDBD_41C2_B7BDCBD3EAC4.get('areas').forEach(function(a){ a.trigger('click') })"}]},{"id":"panorama_C1C897EA_CE89_3DA5_41D7_597F8447A346_camera","initialSequence":"this.sequence_C3CBF3E5_CE89_55AF_41E0_5E26A0811234","enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"sequence_C3D443E5_CE89_55AF_41DB_84CACF200743","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"sequence_C3D423E5_CE89_55AF_41D9_62248C6675D7","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"areas":["this.HotspotPanoramaOverlayArea_DE5BB88E_CE99_527D_4170_70450A9B8F4A"],"id":"overlay_DE77C889_CE99_5267_41DF_55E7A16F3749","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"Arrow 01b"},"roll":0.9,"class":"HotspotPanoramaOverlayImage","pitch":-33,"yaw":-173.77,"image":"this.AnimatedImageResource_DC20CF5E_CE9E_CE9D_41CF_A2E39924F2F0","vfov":5.73,"hfov":10.5,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true,"data":{"label":"Arrow 01b","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_DF60836B_CE99_D6BB_41C1_A70CEF9B9165"],"id":"overlay_DF6A0367_CE99_D6AB_41DF_B73AF7A6C72D","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"Arrow 01b"},"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-178.71,"image":"this.AnimatedImageResource_DC230F5E_CE9E_CE9D_41DD_F55D02ED8A94","vfov":5.73,"hfov":10.5,"pitch":-28.71}],"maps":[],"enabledInCardboard":true,"data":{"label":"Arrow 01b","hasPanoramaAction":true}},{"id":"sequence_C3D463E6_CE89_55AD_41E1_C27DD7EFA170","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"areas":["this.HotspotPanoramaOverlayArea_DE781A1F_CE99_369B_41CB_AF5DEEF6C2DE"],"id":"overlay_DE026A19_CE99_3667_41CF_DBC38531C299","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"Arrow 01b"},"roll":2.31,"class":"HotspotPanoramaOverlayImage","pitch":-31.51,"yaw":-173.63,"image":"this.AnimatedImageResource_DC235F5D_CE9E_CE9F_41C1_233072AED94F","vfov":5.73,"hfov":10.5,"scaleMode":"fit_inside"}],"maps":[],"enabledInCardboard":true,"data":{"label":"Arrow 01b","hasPanoramaAction":true}},{"id":"sequence_C3D413E5_CE89_55AF_41E6_9E96DE3FEC3E","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"areas":["this.HotspotPanoramaOverlayArea_DFCA1CD6_CE97_33EC_41D2_70D4A7E4E4B7"],"id":"overlay_DFC52CCF_CE97_33FC_41DD_B8B61AD9CA2A","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"Arrow 01b"},"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":179.7,"image":"this.AnimatedImageResource_DC239F5D_CE9E_CE9F_41E3_05BAEB1E0D9D","vfov":5.73,"hfov":10.5,"pitch":-36.21}],"maps":[],"enabledInCardboard":true,"data":{"label":"Arrow 01b","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_DEAEEF78_CE8B_4EA5_41DE_95747B56E72C"],"id":"overlay_C1DAFEF3_CE8B_4FAB_41DD_7449DEBE92BA","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"go 2"},"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-1.59,"image":"this.AnimatedImageResource_DC208F5E_CE9E_CE9D_41C2_29939ED32E4C","vfov":5.73,"hfov":10.5,"pitch":-13.66}],"maps":[],"enabledInCardboard":true,"data":{"label":"go 2","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_DE1E1DF2_CE8B_CDA5_41E4_BC1B4A8420E7"],"id":"overlay_DE125DEE_CE8B_CDBD_41C2_B7BDCBD3EAC4","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"go 1"},"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":-80.84,"image":"this.AnimatedImageResource_DC20BF5E_CE9E_CE9D_41D3_99991D1932FE","vfov":5.73,"hfov":10.5,"pitch":-14.69}],"maps":[],"enabledInCardboard":true,"data":{"label":"go 1","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_DECE0AC0_CE8B_77E4_41E4_436CDAEE2EC4"],"id":"overlay_DEC05ABA_CE8B_77A4_41C2_8F3558407480","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"go front"},"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":177.21,"image":"this.AnimatedImageResource_DC206F5E_CE9E_CE9D_41E8_1F34A391635F","vfov":5.73,"hfov":10.5,"pitch":-17.6}],"maps":[],"enabledInCardboard":true,"data":{"label":"go front","hasPanoramaAction":true}},{"areas":["this.HotspotPanoramaOverlayArea_DE96C87F_CE8B_329B_41E0_5B1EB5F7E046"],"id":"overlay_DEB3A86E_CE8B_32BD_41C9_DAB77F71CE0C","useHandCursor":true,"class":"HotspotPanoramaOverlay","items":[{"distance":100,"data":{"label":"go 3"},"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","yaw":80.7,"image":"this.AnimatedImageResource_DC200F5E_CE9E_CE9D_41CF_F4B3D73C48A6","vfov":5.73,"hfov":10.5,"pitch":-13.96}],"maps":[],"enabledInCardboard":true,"data":{"label":"go 3","hasPanoramaAction":true}},{"id":"sequence_C3CBF3E5_CE89_55AF_41E0_5E26A0811234","movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"HotspotPanoramaOverlayArea_DE5BB88E_CE99_527D_4170_70450A9B8F4A","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 4)"},{"id":"AnimatedImageResource_DC20CF5E_CE9E_CE9D_41CF_A2E39924F2F0","colCount":3,"levels":[{"height":132,"url":"media/res_DF046FDA_CE9A_CDE5_41DE_AEAA2C6EBF2E_0.png","class":"ImageResourceLevel","width":243}],"finalFrame":"first","class":"AnimatedImageResource","rowCount":3,"frameDuration":62,"frameCount":9},{"id":"HotspotPanoramaOverlayArea_DF60836B_CE99_D6BB_41C1_A70CEF9B9165","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 4)"},{"id":"AnimatedImageResource_DC230F5E_CE9E_CE9D_41DD_F55D02ED8A94","colCount":3,"levels":[{"height":132,"url":"media/res_DF046FDA_CE9A_CDE5_41DE_AEAA2C6EBF2E_0.png","class":"ImageResourceLevel","width":243}],"finalFrame":"first","class":"AnimatedImageResource","rowCount":3,"frameDuration":62,"frameCount":9},{"id":"HotspotPanoramaOverlayArea_DE781A1F_CE99_369B_41CB_AF5DEEF6C2DE","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 4)"},{"id":"AnimatedImageResource_DC235F5D_CE9E_CE9F_41C1_233072AED94F","colCount":3,"levels":[{"height":132,"url":"media/res_DF046FDA_CE9A_CDE5_41DE_AEAA2C6EBF2E_0.png","class":"ImageResourceLevel","width":243}],"finalFrame":"first","class":"AnimatedImageResource","rowCount":3,"frameDuration":62,"frameCount":9},{"id":"HotspotPanoramaOverlayArea_DFCA1CD6_CE97_33EC_41D2_70D4A7E4E4B7","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 4)"},{"id":"AnimatedImageResource_DC239F5D_CE9E_CE9F_41E3_05BAEB1E0D9D","colCount":3,"levels":[{"height":132,"url":"media/res_DF046FDA_CE9A_CDE5_41DE_AEAA2C6EBF2E_0.png","class":"ImageResourceLevel","width":243}],"finalFrame":"first","class":"AnimatedImageResource","rowCount":3,"frameDuration":62,"frameCount":9},{"id":"HotspotPanoramaOverlayArea_DEAEEF78_CE8B_4EA5_41DE_95747B56E72C","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"AnimatedImageResource_DC208F5E_CE9E_CE9D_41C2_29939ED32E4C","colCount":3,"levels":[{"height":132,"url":"media/res_DF046FDA_CE9A_CDE5_41DE_AEAA2C6EBF2E_0.png","class":"ImageResourceLevel","width":243}],"finalFrame":"first","class":"AnimatedImageResource","rowCount":3,"frameDuration":62,"frameCount":9},{"id":"HotspotPanoramaOverlayArea_DE1E1DF2_CE8B_CDA5_41E4_BC1B4A8420E7","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"AnimatedImageResource_DC20BF5E_CE9E_CE9D_41D3_99991D1932FE","colCount":3,"levels":[{"height":132,"url":"media/res_DF046FDA_CE9A_CDE5_41DE_AEAA2C6EBF2E_0.png","class":"ImageResourceLevel","width":243}],"finalFrame":"first","class":"AnimatedImageResource","rowCount":3,"frameDuration":62,"frameCount":9},{"id":"HotspotPanoramaOverlayArea_DECE0AC0_CE8B_77E4_41E4_436CDAEE2EC4","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)"},{"id":"AnimatedImageResource_DC206F5E_CE9E_CE9D_41E8_1F34A391635F","colCount":3,"levels":[{"height":132,"url":"media/res_DF046FDA_CE9A_CDE5_41DE_AEAA2C6EBF2E_0.png","class":"ImageResourceLevel","width":243}],"finalFrame":"first","class":"AnimatedImageResource","rowCount":3,"frameDuration":62,"frameCount":9},{"id":"HotspotPanoramaOverlayArea_DE96C87F_CE8B_329B_41E0_5B1EB5F7E046","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)"},{"id":"AnimatedImageResource_DC200F5E_CE9E_CE9D_41CF_F4B3D73C48A6","colCount":3,"levels":[{"height":132,"url":"media/res_DF046FDA_CE9A_CDE5_41DE_AEAA2C6EBF2E_0.png","class":"ImageResourceLevel","width":243}],"finalFrame":"first","class":"AnimatedImageResource","rowCount":3,"frameDuration":62,"frameCount":9}],"gap":10,"width":"100%","children":["this.MainViewer"],"height":"100%","scrollBarColor":"#000000","minHeight":0,"backgroundColorRatios":[0],"propagateClick":false,"minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.0.js.map
})();
//Generated with v2023.0.0, Sun Jun 18 2023
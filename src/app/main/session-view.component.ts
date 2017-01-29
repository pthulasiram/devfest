import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

import { AngularFire } from 'angularfire2';

import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
    templateUrl: './session-view.component.html',
})
export class SessionViewComponent {
    session;

    sessionAgenda;
    agendaInfo;

    constructor(router: Router, route: ActivatedRoute, public ds: DataService, public auth: AuthService, public af: AngularFire, title: Title) {
        this.session = route.params.switchMap(params => {
            return ds.sessionList.map(list =>
                list.find(item =>
                    item.$key == params['id']
                )
            )

        });

        this.session.subscribe(sessionData => {
             title.setTitle(sessionData.title + ' | DevFestMN 2017');
        });

        this.agendaInfo = route.params.switchMap(params => {
            return auth.uid.map(uid => 
                [params['id'], uid]
            );
        });

        this.agendaInfo.subscribe(agendaData => {
            let [session, uid] = agendaData;
            this.sessionAgenda = this.af.database.object(`/devfest2017/agendas/${uid}/${session}/`);
        });

    }
        
    addToAgenda() {
        this.sessionAgenda.set({value:true});
    }
    removeFromAgenda() {
        this.sessionAgenda.remove();
    }
}
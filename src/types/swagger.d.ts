declare module Swagger {
    export interface Civilization {
        id?: number;
        name?: string;
        expansion?: string;
        army_type?: string;
        unique_unit?: string;
        unique_tech?: string;
        team_bonus?: string;
        civilization_bonus?: Array<string>;
    }
    export interface CivilizationList {
        civilizations?: Array<Civilization>;
    }
    export interface Cost {
        Wood?: number;
        Food?: number;
        Stone?: number;
        Gold?: number;
    }
    export interface Unit {
        id?: number;
        name?: string;
        description?: string;
        expansion?: string;
        age?: string;
        created_in?: string;
        cost?: Cost;
        build_time?: number;
        reload_time?: number;
        attack_delay?: number;
        movement_rate?: number;
        line_of_sight?: number;
        hit_points?: number;
        range?: string;
        attack?: number;
        armor?: string;
        attack_bonus?: Array<string>;
        armor_bonus?: Array<string>;
        search_radius?: number;
        accuracy?: string;
        blast_radius?: number;
    }
    export interface UnitList {
        units?: Array<Unit>;
    }
    export interface Structure {
        id?: number;
        name?: string;
        description?: string;
        expansion?: string;
        age?: string;
        cost?: Cost;
        build_time?: number;
        hit_points?: number;
        line_of_sight?: number;
        armor?: string;
        range?: string;
        reload_time?: number;
        attack?: number;
        special?: Array<string>;
    }
    export interface StructureList {
        structures?: Array<Structure>;
    }
    export interface Technology {
        id?: number;
        name?: string;
        description?: string;
        expansion?: string;
        age?: string;
        develops_in?: string;
        cost?: Cost;
        build_time?: number;
        applies_to?: Array<string>;
    }
    export interface TechnologyList {
        technologies?: Array<Technology>;
    }
    export interface NotFoundError {
        message?: string;
    }
}

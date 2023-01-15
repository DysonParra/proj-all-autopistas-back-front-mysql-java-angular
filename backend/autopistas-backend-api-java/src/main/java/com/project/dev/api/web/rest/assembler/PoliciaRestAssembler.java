/*
 * @fileoverview    {PoliciaRestAssembler} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
 */
package com.project.dev.api.web.rest.assembler;

import com.project.dev.api.dto.PoliciaDTO;
import com.project.dev.api.web.rest.PoliciaRest;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.RepresentationModelAssembler;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.stereotype.Component;

/**
 * TODO: Definición de {@code PoliciaRestAssembler}.
 *
 * @author Dyson Parra
 * @since 1.8
 */
@Component
public class PoliciaRestAssembler implements RepresentationModelAssembler<PoliciaDTO, EntityModel<PoliciaDTO>> {

    /**
     * Convierte un DTO en un modelo.
     *
     * @param entityDTO DTO a convertir.
     * @return el modelo correspondiente al DTO:
     */
    @Override
    public EntityModel<PoliciaDTO> toModel(PoliciaDTO entityDTO) {
        return new EntityModel<>(entityDTO,
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PoliciaRest.class).getEntity(String.valueOf(entityDTO.getIntIdPolicia()))).withSelfRel(),
                WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(PoliciaRest.class).getAllEntities()).withRel("Policia"));
    }
}
